import type { AlignmentStatus, StraightStep, Vec } from '../types'

export const INITIAL_MISALIGNMENT: Vec = { x: 2, y: -1 }

export const RESET_PRESETS: Vec[] = [
  { x: 2, y: -1 },
  { x: -3, y: 2 },
  { x: 1, y: 3 },
  { x: -2, y: -2 },
  { x: 3, y: 1 },
  { x: -1, y: -3 },
  { x: 2, y: -3 },
]

export const DEFAULT_MOVEMENT_STEP = 0.5

export const MOVEMENT_STEP_OPTIONS = [
  { value: 0.25, label: 'Halus' },
  { value: 0.5, label: 'Normal' },
  { value: 1, label: 'Besar' },
]

export const STORAGE_KEY = 'k40-alignment-simulator:settings'

export const distance = (v: Vec): number => Math.sqrt(v.x * v.x + v.y * v.y)

export const alignmentStatusOf = (v: Vec): AlignmentStatus => {
  const d = distance(v)
  return d <= 0.35 ? 'aligned' : d <= 1.25 ? 'near' : 'unaligned'
}

export const STATUS_COLORS: Record<AlignmentStatus, string> = {
  aligned: 'var(--color-aligned)',
  near: 'var(--color-near)',
  unaligned: 'var(--color-beam)',
}

export const formatSigned = (value: number): string => {
  const rounded = Number(value.toFixed(2))
  const needsHundredths = Math.abs(Math.round(rounded * 100) % 10) !== 0
  const abs = Math.abs(rounded).toFixed(needsHundredths ? 2 : 1)
  return rounded > 0
    ? `+${abs}`
    : rounded < 0
      ? `−${abs}`
      : needsHundredths
        ? '0.00'
        : '0.0'
}

export const vecEquals = (a: Vec, b: Vec): boolean =>
  Math.abs(a.x - b.x) < 1e-6 && Math.abs(a.y - b.y) < 1e-6

export const randomPreset = (current: Vec): Vec => {
  const others = RESET_PRESETS.filter((p) => !vecEquals(p, current))
  const pool = others.length > 0 ? others : RESET_PRESETS
  return pool[Math.floor(Math.random() * pool.length)]
}

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max)

export const STRAIGHT_STEPS: StraightStep[] = [
  {
    id: 'acrylic',
    label: 'Tampal acrylic pada cermin 2',
    action: 'Tampal Acrylic',
    hint: 'Acrylic menangkap kesan tembakan supaya boleh dilihat dan ditanda.',
  },
  {
    id: 'moveY0',
    label: 'Gerak mesin ke Y = 0',
    action: 'Gerak ke Y = 0',
    hint: 'Bawa gantry ke hujung paling atas paksi Y.',
  },
  {
    id: 'fireNear',
    label: 'Tekan Test Laser',
    action: 'Test Laser',
    hint: 'Tembakan pertama meninggalkan kesan bersaiz lebih kurang 4 mm.',
  },
  {
    id: 'mark',
    label: 'Warnakan tanda dengan marker pen',
    action: 'Warnakan Tanda',
    hint: 'Tanda ini jadi rujukan tetap supaya tembakan seterusnya senang dibeza.',
  },
  {
    id: 'moveY90',
    label: 'Gerak mesin ke Y = 90',
    action: 'Gerak ke Y = 90',
    hint: 'Jarak cermin 1 ke cermin 2 kini lebih jauh, jadi sudut serong terserlah.',
  },
  {
    id: 'align',
    label: 'Test Laser, laras skru sampai bertindih',
    action: 'Test Laser',
    hint: 'Laras skru pada cermin 1, tembak lagi, ulang sampai kesan bertindih tanda rujukan.',
  },
]

export const STRAIGHT_PRESETS: Vec[] = [
  { x: 1.5, y: 1 },
  { x: -2, y: 1.5 },
  { x: 2, y: -1.5 },
  { x: -1.5, y: -2 },
  { x: 0.5, y: 2 },
]
