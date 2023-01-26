// SC
import NotesList from './components/notes-list'
// CC
import TimerCounter from './components/timer-counter'

import { Suspense } from 'react'
import Spinner from './components/spinner'

export default function Page() {
    return (
        <main>
            <div className="m-10 text-center">Hello World🐱</div>
            {/* streaming */}
            <Suspense fallback={<Spinner color="border-green-500" />}>
                {/* @ts-ignore */}
                <NotesList />
            </Suspense>
            <TimerCounter />
        </main>
    )
}
