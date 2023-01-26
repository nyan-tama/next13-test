import type { Database } from '../../database.types'
import { format } from 'date-fns'

type Note = Database['public']['Tables']['notes']['Row']

// データ取得
async function fetchNotes() {
    // await new Promise((resolve) => setTimeout(resolve, 10000))

    //フェッチURL、リクエストヘッダーはsupabese　baｓh欄から参照
    const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
        headers: new Headers({
            apikey: process.env.apikey as string,
        }),

        // ＳＳＲでおこなう
        // ビルド時にRoute (app)　─ λ となる
        // cache: 'no-store',

        // IＳＲでおこなう
        // 変更後10秒間再レンダリングを無効にする
        next: { revalidate: 10 },
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data in server')
    }

    const notes: Note[] = await res.json()

    return notes
}

export default async function NotesList() {
    const notes = await fetchNotes()
    return (
        <div className="text-center">
            <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
                Notes
            </p>
            <ul className="m-3">
                {notes.map((note) => (
                    <li key={note.id}>
                        <p>{note.title}</p>
                        <p>
                            <strong className="mr-3">Created at:</strong>
                            {note &&
                                format(
                                    new Date(note.created_at),
                                    'yyyy-MM-dd HH:mm:ss'
                                )}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
