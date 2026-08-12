import { useCallback, useEffect, useRef, useState } from 'react'
import { Crosshair } from 'lucide-react'
import { AppHeader } from './components/AppHeader'
import { LevelTabs } from './components/LevelTabs'
import { StatusPanel } from './components/StatusPanel'
import { TargetView } from './components/TargetView'
import { AcrylicView } from './components/AcrylicView'
import { MirrorPanel } from './components/MirrorPanel'
import { ScrewAdjustPanel } from './components/ScrewAdjustPanel'
import { ResetPanel } from './components/ResetPanel'
import { Footer } from './components/Footer'
import { HelpDialog } from './components/HelpDialog'
import { SettingsDialog } from './components/SettingsDialog'
import { StraightProcedurePanel } from './components/StraightProcedurePanel'
import { useAlignmentSim } from './hooks/useAlignmentSim'
import { useStraightProcedure } from './hooks/useStraightProcedure'
import { useMediaQuery } from './hooks/useMediaQuery'
import { alignmentStatusOf, distance, formatSigned } from './lib/sim'

export const App = () => {
  const {
    level,
    levelId,
    setLevelId,
    position,
    history,
    alignmentStatus,
    activeScrew,
    activeDirection,
    movementStep,
    showTrail,
    animationsEnabled,
    motionEnabled,
    prefersReducedMotion,
    moveBeam,
    resetAlignment,
    setMovementStep,
    setShowTrail,
    setAnimationsEnabled,
  } = useAlignmentSim()
  const straight = useStraightProcedure()
  const [helpOpen, setHelpOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const helpButtonRef = useRef<HTMLButtonElement | null>(null)
  const settingsButtonRef = useRef<HTMLButtonElement | null>(null)
  const compact = !useMediaQuery('(min-width: 640px)', true)

  const openHelp = useCallback(() => setHelpOpen(true), [])
  const closeHelp = useCallback(() => setHelpOpen(false), [])
  const openSettings = useCallback(() => setSettingsOpen(true), [])
  const closeSettings = useCallback(() => setSettingsOpen(false), [])

  const isStraight = level.kind === 'straight'
  const { restart: restartStraight } = straight

  useEffect(() => {
    restartStraight()
  }, [levelId, restartStraight])

  const resetStraightLevel = useCallback(() => {
    resetAlignment()
    restartStraight()
  }, [resetAlignment, restartStraight])

  const performStraightAction = useCallback(() => {
    straight.performStep(position)
  }, [straight, position])

  const referenceShot = straight.shots.find((shot) => shot.isReference) ?? null
  const latestShot =
    straight.shots.length > 0 ? straight.shots[straight.shots.length - 1] : null
  const separation =
    referenceShot && latestShot && latestShot.id !== referenceShot.id
      ? { x: latestShot.x - referenceShot.x, y: latestShot.y - referenceShot.y }
      : null
  const separationMm = separation ? distance(separation) : null
  const straightStatus = separation ? alignmentStatusOf(separation) : 'unaligned'
  const displayStatus = isStraight ? straightStatus : alignmentStatus
  const srText = isStraight
    ? separationMm === null
      ? 'Belum ada tembakan pada Y sama dengan 90.'
      : `Sesaran tembakan terakhir ${separationMm.toFixed(1)} milimeter daripada tanda rujukan.`
    : `Posisi beam X ${formatSigned(position.x)}, Y ${formatSigned(position.y)}.`
  const helperText = isStraight
    ? 'Laras skru pada cermin 1, kemudian tembak semula sehingga kesan bertindih.'
    : 'Laraskan skru di bawah untuk menggerakkan beam ke tengah sasaran.'

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <AppHeader
        onOpenHelp={openHelp}
        onOpenSettings={openSettings}
        helpButtonRef={helpButtonRef}
        settingsButtonRef={settingsButtonRef}
      />
      <LevelTabs levelId={levelId} onChange={setLevelId} />
      <main className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col gap-4 px-3 py-4 sm:px-6 sm:py-6 lg:grid lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:content-start">
        <MirrorPanel
          key={`ref-${levelId}`}
          level={level}
          activeScrew={activeScrew}
          activeDirection={activeDirection}
          compact={compact}
          onInfo={openHelp}
          className="lg:col-start-1 lg:row-start-2"
        />
        <div className="sticky top-0 z-30 -mx-3 bg-canvas px-3 py-2 sm:-mx-6 sm:px-6 lg:static lg:z-auto lg:col-start-2 lg:row-start-1 lg:mx-0 lg:p-0">
          <section className="card p-3 sm:p-5" aria-labelledby="beam-target-heading">
            <h2
              id="beam-target-heading"
              className="mb-2 flex items-center gap-2 text-sm font-bold text-ink sm:mb-3 sm:text-lg"
            >
              <Crosshair
                className="h-4 w-4 text-muted sm:h-5 sm:w-5"
                aria-hidden="true"
              />
              {level.targetHeading}
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 xl:flex-row xl:items-start">
              <StatusPanel
                alignmentStatus={displayStatus}
                labels={level.statusLabels}
                successMessage={level.successMessage}
                srText={srText}
                helperText={helperText}
                className="rounded-xl border border-line bg-canvas/50 p-2.5 sm:p-4 xl:order-2 xl:w-64 xl:shrink-0"
              />
              {isStraight ? (
                <AcrylicView
                  shots={straight.shots}
                  reference={straight.reference}
                  acrylicApplied={straight.acrylicApplied}
                  machineY={straight.machineY}
                  motionEnabled={motionEnabled}
                  className="mx-auto max-w-[min(70%,30svh)] flex-1 lg:max-w-[434px] xl:order-1 xl:max-w-[355px]"
                />
              ) : (
                <TargetView
                  position={position}
                  history={history}
                  showTrail={showTrail}
                  alignmentStatus={alignmentStatus}
                  motionEnabled={motionEnabled}
                  className="mx-auto max-w-[min(70%,30svh)] flex-1 lg:max-w-[434px] xl:order-1 xl:max-w-[355px]"
                />
              )}
            </div>
          </section>
        </div>
        {isStraight ? (
          <StraightProcedurePanel
            steps={straight.steps}
            stepIndex={straight.stepIndex}
            step={straight.step}
            shotCount={straight.shots.length}
            separationMm={separationMm}
            onAction={performStraightAction}
            onRestart={resetStraightLevel}
            className="lg:col-start-2 lg:row-start-2 lg:max-w-[380px] lg:self-start"
          />
        ) : null}
        <ScrewAdjustPanel
          key={`adjust-${levelId}`}
          level={level}
          activeScrew={activeScrew}
          activeDirection={activeDirection}
          compact={compact}
          onMove={moveBeam}
          disabled={isStraight && !straight.canAdjust}
          hint={
            isStraight
              ? straight.canAdjust
                ? 'Laras skru pada cermin 1, kemudian tembak semula sehingga kesan bertindih.'
                : 'Skru dikunci sehingga anda sampai ke langkah melaras dalam prosedur.'
              : undefined
          }
          className="lg:col-start-1 lg:row-start-1"
        />
        {isStraight ? null : (
          <ResetPanel
            onReset={resetAlignment}
            className="lg:col-start-2 lg:row-start-2 lg:max-w-[380px] lg:self-start"
          />
        )}
        <Footer className="lg:col-span-2 lg:row-start-3" />
      </main>
      <HelpDialog
        open={helpOpen}
        onClose={closeHelp}
        returnFocusRef={helpButtonRef}
        level={level}
      />
      <SettingsDialog
        open={settingsOpen}
        onClose={closeSettings}
        returnFocusRef={settingsButtonRef}
        movementStep={movementStep}
        onMovementStepChange={setMovementStep}
        showTrail={showTrail}
        onShowTrailChange={setShowTrail}
        animationsEnabled={animationsEnabled}
        onAnimationsEnabledChange={setAnimationsEnabled}
        prefersReducedMotion={prefersReducedMotion}
        onReset={isStraight ? resetStraightLevel : resetAlignment}
      />
    </div>
  )
}
