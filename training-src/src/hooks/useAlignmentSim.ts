import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { LEVELS } from '../levels'
import {
  INITIAL_MISALIGNMENT,
  alignmentStatusOf,
  clamp,
  randomPreset,
  vecEquals,
} from '../lib/sim'
import { loadSettings, saveSettings } from '../lib/settings'
import { usePrefersReducedMotion } from './useMediaQuery'
import type { Direction, LevelId, ScrewId, TrailPoint, Vec } from '../types'

export const useAlignmentSim = () => {
  const initial = useRef(loadSettings())
  const [levelId, setLevelId] = useState<LevelId>(initial.current.levelId)
  const [position, setPosition] = useState<Vec>(INITIAL_MISALIGNMENT)
  const [history, setHistory] = useState<TrailPoint[]>([])
  const [activeScrew, setActiveScrew] = useState<ScrewId | null>(null)
  const [activeDirection, setActiveDirection] = useState<Direction | null>(null)
  const [movementStep, setMovementStep] = useState(initial.current.movementStep)
  const [showTrail, setShowTrail] = useState(initial.current.showTrail)
  const [animationsEnabled, setAnimationsEnabled] = useState(
    initial.current.animationsEnabled,
  )

  const level = LEVELS[levelId]
  const prefersReducedMotion = usePrefersReducedMotion()
  const motionEnabled = animationsEnabled && !prefersReducedMotion

  const activeTimeout = useRef<number | null>(null)
  const trailIdCounter = useRef(0)

  const clearActiveTimeout = useCallback(() => {
    if (activeTimeout.current !== null) {
      window.clearTimeout(activeTimeout.current)
      activeTimeout.current = null
    }
  }, [])

  useEffect(() => clearActiveTimeout, [clearActiveTimeout])

  useEffect(() => {
    saveSettings({ movementStep, showTrail, animationsEnabled, levelId })
  }, [movementStep, showTrail, animationsEnabled, levelId])

  const clearTrail = useCallback(() => setHistory([]), [])

  const moveBeam = useCallback(
    (screwId: ScrewId, direction: Direction) => {
      if (level.kind === 'gantry') return
      const movement = level.screws[screwId].movement[direction]
      setPosition((current) => {
        const next: Vec = {
          x: clamp(current.x + movement.x * movementStep, -5, 5),
          y: clamp(current.y + movement.y * movementStep, -5, 5),
        }
        if (vecEquals(current, next)) return current
        setHistory((trail) => {
          const last = trail[trail.length - 1]
          if (last && vecEquals(last, current)) return trail
          trailIdCounter.current += 1
          const nextTrail = [...trail, { ...current, id: trailIdCounter.current }]
          return nextTrail.length > 8
            ? nextTrail.slice(nextTrail.length - 8)
            : nextTrail
        })
        return next
      })
      clearActiveTimeout()
      setActiveScrew(screwId)
      setActiveDirection(direction)
      activeTimeout.current = window.setTimeout(() => {
        setActiveScrew(null)
        setActiveDirection(null)
        activeTimeout.current = null
      }, 400)
    },
    [clearActiveTimeout, level, movementStep],
  )

  const resetAlignment = useCallback(() => {
    clearActiveTimeout()
    setPosition(randomPreset(position))
    setHistory([])
    setActiveScrew(null)
    setActiveDirection(null)
  }, [clearActiveTimeout, position])

  const previousLevel = useRef(levelId)
  useEffect(() => {
    if (previousLevel.current !== levelId) {
      previousLevel.current = levelId
      resetAlignment()
    }
  }, [levelId, resetAlignment])

  return {
    level,
    levelId,
    setLevelId,
    position,
    history,
    alignmentStatus: useMemo(() => alignmentStatusOf(position), [position]),
    activeScrew,
    activeDirection,
    movementStep,
    showTrail,
    animationsEnabled,
    motionEnabled,
    prefersReducedMotion,
    moveBeam,
    resetAlignment,
    clearTrail,
    setMovementStep,
    setShowTrail,
    setAnimationsEnabled,
  }
}
