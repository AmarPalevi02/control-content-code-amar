'use client'

import FormInput from '@/components/ui/FormInput'
import { postData } from '@/utils/fetch'
import React, { useState } from 'react'

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
      console.log('All fields are required!');
      return;
    }

    try {
      const payload = {
        about: form.about,
        city: form.city,
        jobs: form.jobs
      }
      await postData('/myjobs', payload)
    } catch (error) {

    }
    console.log(form)

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
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Create