'use client'

import Button from '@/components/ui/Button'
import FormInput from '@/components/ui/FormInput'
import { postData } from '@/utils/fetch'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Create = () => {
  const [form, setForm] = useState<{
    about: string;
    city: string;
    jobs: string[];
  }>({
    about: '',
    city: '',
    jobs: []
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const route = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleJobsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newJob = [...form.jobs]
    newJob[index] = e.target.value
    setForm({ ...form, jobs: newJob })
  }

  const handleAddJobs = () => {
    setForm({ ...form, jobs: [...form.jobs, ''] })
  }

  const handleSubmit = async () => {
    if (!form.about || !form.city || form.jobs.length === 0) {
      return;
    }

    try {
      setIsLoading(true)
      const payload = {
        about: form.about,
        city: form.city,
        jobs: form.jobs
      }
      await postData('/myjobs', payload)
      setIsLoading(false)
      route.back()
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <FormInput
          name='about'
          label={'About'}
          type={'text'}
          value={form.about}
          placeholder='Masukan Bio'
          required={true}
          onChange={handleChange}
        />

        <FormInput
          name='city'
          label={'City'}
          type={'text'}
          value={form.city}
          placeholder='Masukan City'
          required={true}
          onChange={handleChange}
        />

        <div>
          {form.jobs.map((job, index) => (
            <div key={index}>
              <FormInput
                name='jobs'
                label={`Job ${index + 1}`}
                type={'text'}
                value={job}
                placeholder={`Job ${index + 1}`}
                onChange={(e) => handleJobsChange(e, index)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddJobs}>Add Job</button>
        </div>
        <Button
          type='submit'
          className="px-5 py-2 bg-green-500"
          variant='secondary'
        >
          {isLoading ? <p>Loading..</p> : <p>Submit</p>}
        </Button>
      </form>
    </div>
  )
}

export default Create