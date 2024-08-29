import { MythicRun, Player } from '@shared/core/types/leaderboard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiBaseUrl } from './api'
import IconButton from '@shared/core/utilities/buttons/IconButton'
import { MdClose } from 'react-icons/md'
import dungeonS1 from '../../data/dungeons/dungeonsS1.json'
import dungeonS2 from '../../data/dungeons/dungeonsS2.json'
import dungeonS3 from '../../data/dungeons/dungeonsS3.json'
import affixes from '../../data/affixes.json'
import classes from '../../data/classes.json'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  player: Player | null
  season: string
}

const dungeons = [...dungeonS1, ...dungeonS2, ...dungeonS3]
function PlayerRuns({ isOpen, setIsOpen, player, season }: Readonly<Props>) {
  const [runs, setRuns] = useState<MythicRun[]>([])
  useEffect(() => {
    if (!player) return
    axios
      .post(`${apiBaseUrl}/runs`, {
        playerId: player.pid,
        season: season,
      })
      .then((fetchRuns) => {
        setRuns(
          (fetchRuns.data.runs as MythicRun[]).sort((a, b) =>
            b.dungeon.localeCompare(a.dungeon)
          )
        )
      })
  }, [player, season])
  return (
    isOpen &&
    player && (
      <>
        <div
          onClick={() => {
            setIsOpen(false)
          }}
          className="absolute z-50 h-screen w-screen cursor-pointer bg-black opacity-30"
        ></div>
        <div className="bg-primary-2 border-primary-4 absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg border-2 p-4 shadow-md">
          <div className="absolute right-1 top-1">
            <IconButton onClick={() => setIsOpen(false)}>
              <MdClose />
            </IconButton>
          </div>
          <p
            spec-theme={player.pclass}
            className="text-size-5 text-accent-2 w-full text-center"
          >
            {player.name}
          </p>
          {runs ? (
            <table className="overflow-hidden rounded-t-lg">
              <thead>
                <tr className="border-secondary-4 bg-primary-1 *:text-size-3 h-full border-b *:px-6 *:py-4 *:text-center">
                  <th className="!pl-12">Dungeon</th>
                  <th>Level</th>
                  <th>Affixes</th>
                  <th>Time</th>
                  <th>Players</th>
                  <th className="!pr-12">Time</th>
                </tr>
              </thead>
              <tbody>
                {runs.map((run) => {
                  const dungeon = dungeons.find(
                    (dungeon) => dungeon.id === run.dungeon
                  )
                  return (
                    dungeon && (
                      <tr
                        key={run.rid}
                        className="odd:bg-primary-2 even:bg-primary-1 border-primary-4 border-b font-bold *:py-4 *:text-center even:!bg-opacity-20"
                      >
                        <td className="text-size-2 !pl-7">{dungeon.abbr}</td>
                        <td className="text-size-2">
                          {run.lvl}
                          {Array.from(
                            { length: getTimeSection(run.time, run.dungeon) },
                            (_, i) => (
                              <span key={run.rid + i}>*</span>
                            )
                          )}
                        </td>
                        <td className="flex h-full flex-row justify-center gap-1">
                          {run.affixes.map((affixId) => {
                            const affix = affixes.find((a) => a.id === affixId)
                            return (
                              affix && (
                                <a
                                  key={run.rid + affixId}
                                  href={affix.link}
                                  target="_blank"
                                  className="h-5 w-5"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    className="h-6 w-6"
                                    src={affix.icon}
                                    alt={affix.name}
                                  />
                                </a>
                              )
                            )
                          })}
                        </td>
                        <td className="text-size-2">
                          {Math.floor(run.time / 60)}:
                          {run.time % 60 < 10 ? '0' : ''}
                          {run.time % 60}
                        </td>
                        <td className="text-size-1 flex flex-row gap-1">
                          {run.pnames.map((pname, idx) => {
                            const job = classes.find(
                              (job) => job.name === run.pclasses[idx]
                            )
                            let role = undefined
                            switch (idx) {
                              case 0:
                                role = 'tank'
                                break
                              case 1:
                                role = 'healer'
                                break
                              default:
                                role = 'dps'
                                break
                            }
                            return (
                              job && (
                                <div
                                  spec-theme={run.pclasses[idx]}
                                  key={run.rid + pname}
                                  className="mr-11 flex flex-row items-center gap-1"
                                >
                                  <img
                                    key={player.pid + 'class'}
                                    src={job.icon}
                                    alt={job.name}
                                    className="h-5 w-5 rounded-full"
                                  />
                                  <p className="text-accent-2 font-assistant">
                                    {pname}
                                  </p>
                                  <img
                                    key={player.pid + 'role'}
                                    src={`/assets/${role}.svg`}
                                    alt={role}
                                    className="h-4 w-4"
                                  />
                                </div>
                              )
                            )
                          })}
                        </td>
                        <td className="text-size-2 !pr-7">
                          {`${(new Date(run.timestamp * 1000).getMonth() + 1).toString().padStart(2, '0')}/${new Date(run.timestamp * 1000).getDate().toString().padStart(2, '0')}/${new Date(run.timestamp * 1000).getFullYear().toString().slice(-2)} ${new Date(run.timestamp * 1000).getHours().toString().padStart(2, '0')}:${new Date(run.timestamp * 1000).getMinutes().toString().padStart(2, '0')}`}
                        </td>
                      </tr>
                    )
                  )
                })}
              </tbody>
            </table>
          ) : (
            <h1 className="text-size-5 w-full text-center">No runs found</h1>
          )}
        </div>
      </>
    )
  )
}

export default PlayerRuns

const getTimeSection = (time: number, dungeonId: string): number => {
  const dungeon = dungeons.find((dungeon) => dungeon.id === dungeonId)
  if (!dungeon) return 0
  let section = 0
  for (const t of dungeon.timer) {
    if (time >= t) return section
    section++
  }
  return section
}
