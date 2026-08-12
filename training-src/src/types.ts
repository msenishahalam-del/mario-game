export interface Vec {
  x: number
  y: number
}

export type AlignmentStatus = 'aligned' | 'near' | 'unaligned'

export type LevelId = 'level1' | 'level2' | 'level3'
export type LevelKind = 'centre' | 'straight'

export type ScrewId = 'screw1' | 'screw2' | 'screw3'
export type ScrewAxis = 'vertical' | 'horizontal' | 'diagonal'
export type Direction = 'minus' | 'plus'

export interface OverlayPos {
  top: string
  left: string
}

export interface ScrewMovement extends Vec {
  description: string
}

export interface ScrewConfig {
  id: ScrewId
  number: number
  title: string
  extraTitle?: string
  description: string
  colorVar: string
  axis: ScrewAxis
  minusLabel: string
  plusLabel: string
  movement: { minus: ScrewMovement; plus: ScrewMovement }
  knob: OverlayPos
  badge: OverlayPos
  refBadge: OverlayPos
  refArrow: OverlayPos
  pod: { side: 'left' | 'right'; top: string }
  guide: string
}

export interface LevelImage {
  path: string
  width: number
  height: number
  alt: string
}

export interface LevelConfig {
  id: LevelId
  number: number
  kind: LevelKind
  shortName: string
  tabLabel: string
  refHeading: string
  targetHeading: string
  statusLabels: Record<AlignmentStatus, string>
  successMessage: string
  image: LevelImage
  refImageClass: string
  adjustStageClass: string
  screwOrder: ScrewId[]
  screws: Record<ScrewId, ScrewConfig>
}

export interface TrailPoint extends Vec {
  id: number
}

export interface Shot {
  id: number
  x: number
  y: number
  isReference: boolean
  order: number
}

export interface StraightStep {
  id: 'acrylic' | 'moveY0' | 'fireNear' | 'mark' | 'moveY90' | 'align'
  label: string
  action: string
  hint: string
}
