'use client'

import { useRouter } from 'next/navigation'

// 画面全体ではなくSCのみ再取得再レンダリングしてくれる
export default function RefreshBtn() {
    const router = useRouter()
    return (
        <div className="text-center">
            <button
                className="rounded bg-indigo-600 px-3 py-1 front-medium text-white hover:bg-indigo-700"
                onClick={() => {
                    router.refresh()
                }}
            >
                Refresh current route
            </button>
        </div>
    )
}
