'use client'

import Table from '@/components/ui/Table'
import { getDatas } from '../../utils/fetch'
import React, { useEffect, useState } from 'react'
import HeaderTable from '@/components/ui/HeaderTable'
import RowTable from '@/components/ui/RowTable'

type Bio = {
  id: string,
  about: string,
  city: string,
  Jobs: { job: string }[],
}

const Bio = () => {
  const [bio, setbio] = useState<Bio[]>([])

  const handleBio = async () => {
    try {
      const response = await getDatas<Bio[]>('myjobs')
      setbio(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleBio()
  }, [])

  console.log(bio)
  return (
    <div>
      <table>
        <HeaderTable colums={["No", "About", "City", "Jobs", "Action"]} />

        {bio.map((item, index) => {
          return (
            <RowTable
              key={item.id}
              data={[
                `${index + 1}`,
                item.about,
                item.city,
                <div key={`jobs-${item.id}`} className="flex flex-col">
                  {item.Jobs.map((job, i) => (
                    <span key={i} className="block">
                      {job.job}
                    </span>
                  ))}
                </div>,
              ]}
              onEdit={() => alert(`Edit bio with id: ${item.id}`)}
              onDelete={() => alert(`Delete bio with id: ${item.id}`)}
            />
          )
        })}
      </table>
    </div>
  )
}

export default Bio