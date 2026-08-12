import { useCallback, useRef, useState } from 'react'
import { STRAIGHT_PRESETS, STRAIGHT_STEPS } from '../lib/sim'
import type { Shot, Vec } from '../types'

export const useStraightProcedure = () => {
  const [stepIndex, setStepIndex] = useState(0)
  const [shots, setShots] = useState<Shot[]>([])
  const [machineY, setMachineY] = useState(0)
  const [reference, setReference] = useState<Vec>(STRAIGHT_PRESETS[0])
  const shotIdCounter = useRef(0)

  const step = STRAIGHT_STEPS[stepIndex]
  const acrylicApplied = stepIndex > 0
  const canAdjust = step.id === 'align'

  const restart = useCallback(() => {
    setStepIndex(0)
    setShots([])
    setMachineY(0)
    setReference(
      STRAIGHT_PRESETS[Math.floor(Math.random() * STRAIGHT_PRESETS.length)],
    )
  }, [])

  const fire = useCallback((x: number, y: number) => {
    shotIdCounter.current += 1
    const id = shotIdCounter.current
    setShots((current) => {
      const next: Shot[] = [
        ...current,
        { id, x, y, isReference: false, order: current.length + 1 },
      ]
      if (next.length <= 8) return next
      const evictIndex = next.findIndex((shot) => !shot.isReference)
      return next.filter((_, index) => index !== evictIndex)
    })
  }, [])

  return {
    stepIndex,
    step,
    steps: STRAIGHT_STEPS,
    shots,
    machineY,
    reference,
    acrylicApplied,
    canAdjust,
    performStep: useCallback(
      (screwOffset: Vec) => {
        switch (step.id) {
          case 'moveY0':
            setMachineY(0)
            break
          case 'moveY90':
            setMachineY(90)
            break
          case 'fireNear':
            fire(reference.x, reference.y)
            break
          case 'mark':
            setShots((current) =>
              current.map((shot) => ({ ...shot, isReference: true })),
            )
            break
          case 'align':
            fire(reference.x + screwOffset.x, reference.y + screwOffset.y)
        }
        if (step.id !== 'align') {
          setStepIndex((index) => Math.min(index + 1, STRAIGHT_STEPS.length - 1))
        }
      },
      [fire, reference, step.id],
    ),
    restart,
  }
}
