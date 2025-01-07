'use client'

import { deleteData, getDatas } from '../../utils/fetch'
import React, { useEffect, useState } from 'react'
import HeaderTable from '@/components/ui/HeaderTable'
import RowTable from '@/components/ui/RowTable'
import Title from '@/components/ui/Title'

type Bio = {
  id: string,
  about: string,
  city: string,
  Jobs: { job: string }[],
}

const Bio = () => {
  const [bio, setbio] = useState<Bio[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleBio = async () => {
    setIsLoading(true)
    try {
      const response = await getDatas<Bio[]>('myjobs')
      setbio(response)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeletBio = async (id: string) => {
    try {
      await deleteData('myjobs', id)
      setbio((prevBio) => prevBio.filter((item) => item.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleBio()
  }, [])

  return (
    <div>
      <Title title='Bio' nextpage='/bio/create' />
      {bio.length === 0 && <p className=''>Data is Not Found</p>}
      {isLoading ? (
        <p>Lodding...</p>
      ) : (
        <>
          {bio.length > 0 && (
            <table className=''>
              <HeaderTable colums={["No", "About", "City", "Jobs", "Action"]} />
              <tbody>
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
                      onDelete={() => handleDeletBio(item.id)}
                    />
                  )
                })}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  )
}

export default Bio