import { Select } from '@material-tailwind/react'
import LeaderboardSelectOption from './LeaderboardSelectOption'
import { useCallback, Dispatch, SetStateAction, useState } from 'react'
import { PaginateParameters, Role } from '@shared/core/types/requests'
import Input from '@shared/core/utilities/Input'

type Props = {
  season: {
    value: string | undefined
    setter: Dispatch<SetStateAction<string | undefined>>
  }
  filterName: {
    value: PaginateParameters['filterName']
    setter: Dispatch<SetStateAction<string | undefined>>
  }
  filterClass: {
    value: PaginateParameters['filterClass']
    setter: Dispatch<SetStateAction<string | undefined>>
  }
  filterRole: {
    value: PaginateParameters['filterRole']
    setter: Dispatch<SetStateAction<Role | undefined>>
  }
}

function LeaderboardForm({
  season,
  filterName,
  filterClass,
  filterRole,
}: Readonly<Props>) {
  const [name, setName] = useState<string>('')
  const scrollToTopOnLoad = useCallback(
    (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
      e.currentTarget.parentElement?.scrollTo(0, 0)
    },
    []
  )
  const getSelected = useCallback(
    (
      state: string | undefined,
      setter: Dispatch<SetStateAction<string | undefined>>,
      label: string | undefined,
      accent: boolean = false
    ) => {
      return (
        <div className="pointer-events-none w-full -translate-y-1 *:flex *:w-full">
          <LeaderboardSelectOption
            value={state}
            setter={setter}
            current={state}
            placeholder
            accent={accent}
          >
            {label}
          </LeaderboardSelectOption>
        </div>
      )
    },
    []
  )
  const seasons: { [key: string]: string } = {
    '1': 'Season 1',
    '2': 'Season 2',
  }
  const jobs: { [key: string]: string } = {
    deathknight: 'Death Knight',
    demonhunter: 'Demon Hunter',
    druid: 'Druid',
    evoker: 'Evoker',
    hunter: 'Hunter',
    mage: 'Mage',
    monk: 'Monk',
    paladin: 'Paladin',
    priest: 'Priest',
    rogue: 'Rogue',
    shaman: 'Shaman',
    warlock: 'Warlock',
    warrior: 'Warrior',
  }
  const roles: { [key: string]: string } = {
    tank: 'Tank',
    healer: 'Healer',
    dps: 'DPS',
  }
  return (
    <div className="grid w-full grid-cols-2 flex-row items-end gap-2 lg:flex">
      <div className="w-full lg:w-36">
        <Select
          placeholder={null}
          variant="standard"
          label="Season"
          selected={() =>
            getSelected(
              season.value,
              season.setter,
              season.value ? seasons[season.value] : ''
            )
          }
          onChange={() => null}
          value={season.value}
          className="*:text-secondary-2 border-secondary-4 text-size-1"
          containerProps={{ style: { minWidth: '9rem' } }}
          labelProps={{
            className: 'text-secondary-2 after:border-secondary-2',
          }}
          menuProps={{
            className: 'text-secondary-3 bg-primary-2 border-primary-3 gap-2',
          }}
        >
          <div
            onLoad={scrollToTopOnLoad}
            className="flex max-h-80 flex-col gap-px"
          >
            {Object.keys(seasons).map((key) => (
              <LeaderboardSelectOption
                key={key}
                value={key}
                setter={season.setter}
                current={season.value}
              >
                {seasons[key]}
              </LeaderboardSelectOption>
            ))}
          </div>
        </Select>
      </div>
      <div spec-theme={filterClass.value} className="w-full lg:w-48">
        <Select
          placeholder={null}
          variant="standard"
          label="Class"
          value={filterClass.value}
          selected={() =>
            getSelected(
              filterClass.value,
              filterClass.setter,
              filterClass.value ? jobs[filterClass.value] : '',
              true
            )
          }
          onChange={() => null}
          className="*:text-accent-3 border-secondary-4 text-size-1"
          containerProps={{ style: { minWidth: '12rem' } }}
          labelProps={{
            className: 'anim text-secondary-2 after:border-secondary-2',
          }}
          menuProps={{
            className:
              'text-secondary-3 bg-primary-2 border-primary-3 scrollbar-thin scrollbar-corner-transparent scrollbar-thumb-rounded-md scrollbar-thumb-light-accent-2 dark:scrollbar-thumb-dark-accent-3 scrollbar-track-transparent',
          }}
        >
          <div
            onLoad={scrollToTopOnLoad}
            className="flex max-h-80 flex-col gap-px"
          >
            <LeaderboardSelectOption
              value={undefined}
              setter={filterClass.setter}
              current={filterClass.value}
            >
              None
            </LeaderboardSelectOption>
            {Object.keys(jobs).map((key) => (
              <LeaderboardSelectOption
                key={key}
                value={key}
                setter={filterClass.setter}
                current={filterClass.value}
                accent
              >
                {jobs[key]}
              </LeaderboardSelectOption>
            ))}
          </div>
        </Select>
      </div>
      <div className="w-full lg:w-36">
        <Select
          placeholder={null}
          variant="standard"
          label="Role"
          selected={() =>
            getSelected(
              filterRole.value,
              filterRole.setter as Dispatch<SetStateAction<string | undefined>>,
              filterRole.value ? roles[filterRole.value] : ' '
            )
          }
          onChange={() => null}
          value={filterRole.value}
          className="*:text-secondary-2 border-secondary-4 text-size-1"
          containerProps={{ style: { minWidth: '9rem' } }}
          labelProps={{
            className: 'text-secondary-2 after:border-secondary-2',
          }}
          menuProps={{
            className: 'text-secondary-3 bg-primary-2 border-primary-3 gap-2',
          }}
        >
          <div
            onLoad={scrollToTopOnLoad}
            className="flex max-h-80 flex-col gap-px"
          >
            <LeaderboardSelectOption
              value={undefined}
              setter={
                filterRole.setter as Dispatch<
                  SetStateAction<string | undefined>
                >
              }
              current={filterRole.value}
            >
              None
            </LeaderboardSelectOption>
            {Object.keys(roles).map((key) => (
              <LeaderboardSelectOption
                key={key}
                value={key}
                setter={
                  filterRole.setter as Dispatch<
                    SetStateAction<string | undefined>
                  >
                }
                current={filterRole.value}
              >
                {roles[key]}
              </LeaderboardSelectOption>
            ))}
          </div>
        </Select>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-full">
        <Input
          type="text"
          value={name}
          onChange={setName}
          placeholder="Character Name"
          sideAction={
            <button
              type="submit"
              className="anim-slow bg-primary-4 hover:bg-secondary-2 hover:text-primary-2 text-md h-full rounded-sm px-2 sm:text-lg lg:text-xl"
              onClick={() => filterName.setter(name === '' ? undefined : name)}
            >
              Search
            </button>
          }
        />
      </form>
    </div>
  )
}

export default LeaderboardForm
