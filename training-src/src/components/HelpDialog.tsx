import type { RefObject } from 'react'
import { Modal } from './Modal'
import { SCREW_ORDER } from '../levels'
import type { LevelConfig } from '../types'

const USAGE_STEPS = [
  'Lihat kedudukan beam pada kawasan sasaran.',
  'Pada panel Laras Skru, cari skru yang hendak dilaraskan pada gambar.',
  'Tekan butang di sebelah skru itu: ↺ untuk lawan jam, ↻ untuk ikut jam.',
  'Perhatikan arah pergerakan beam.',
  'Laraskan sehingga beam berada di tengah.',
]

const STATUS_MEANINGS = [
  {
    label: 'Sejajar',
    text: 'Beam berada sangat hampir dengan pusat sasaran.',
  },
  {
    label: 'Hampir Sejajar',
    text: 'Beam sudah dekat, perlu pelarasan halus sahaja.',
  },
  { label: 'Belum Sejajar', text: 'Beam masih jauh daripada pusat sasaran.' },
]

interface HelpDialogProps {
  open: boolean
  onClose: () => void
  returnFocusRef?: RefObject<HTMLElement | null>
  level: LevelConfig
}

export const HelpDialog = ({
  open,
  onClose,
  returnFocusRef,
  level,
}: HelpDialogProps) => (
  <Modal
    open={open}
    onClose={onClose}
    title="Cara Menggunakan Simulator"
    returnFocusRef={returnFocusRef}
  >
    <div className="space-y-5 text-sm text-muted">
      <section>
        <p className="mb-3">
          Simulator ini membantu anda memahami bagaimana skru pelaras pada cermin
          mesin laser menggerakkan beam pada sasaran. Pilih latihan di bahagian
          atas: Level 1 untuk cermin mirror mount, Level 2 untuk cermin pada head
          laser.
        </p>
        <h3 className="mb-2 text-sm font-semibold text-ink">Langkah</h3>
        <ol className="list-decimal space-y-1.5 pl-5">
          {USAGE_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      <section>
        <h3 className="mb-2 text-sm font-semibold text-ink">
          Fungsi Setiap Skru — {level.tabLabel}
        </h3>
        <ul className="space-y-2">
          {SCREW_ORDER.map((screwId) => {
            const screw = level.screws[screwId]
            return (
              <li key={screwId} className="flex items-start gap-2">
                <span
                  className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                  style={{ backgroundColor: screw.colorVar }}
                  aria-hidden="true"
                >
                  {screw.number}
                </span>
                <span>
                  Ikut jam ({'↻'}) beam {screw.plusLabel}, lawan jam ({'↺'}) beam{' '}
                  {screw.minusLabel}.
                </span>
              </li>
            )
          })}
        </ul>
      </section>
      <section>
        <h3 className="mb-2 text-sm font-semibold text-ink">
          Maksud Status Alignment
        </h3>
        <dl className="space-y-1.5">
          {STATUS_MEANINGS.map((status) => (
            <div key={status.label} className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-ink">{status.label}:</dt>
              <dd>{status.text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="rounded-xl border border-[#f4cfd0] bg-[#fdf0f0] p-3 text-[#8a2226]">
        <h3 className="mb-1 text-sm font-semibold">Nota Keselamatan</h3>
        <p>
          Simulator ini tidak mengawal mesin laser sebenar. Pastikan mesin dalam
          keadaan selamat dan penutup ditutup semasa latihan simulasi ini.
        </p>
      </section>
    </div>
  </Modal>
)
