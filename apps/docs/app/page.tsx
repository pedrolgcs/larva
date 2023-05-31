'use client'
import * as React from 'react'
import { TextInput } from '@larva/ui'

export default function Home() {
  const [total, setTotal] = React.useState('')

  return (
    <main>
      <TextInput
        maskType="date"
        value={total}
        onChange={(event) => setTotal(event.target.value)}
      />
    </main>
  )
}
