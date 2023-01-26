import '../styles/globals.css'
import NavBar from './components/nav-bar'

// RootLoyoutは<html>と<body>を含める必要がある
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                {/* children内に以下のように展開される
                <ErrorBoundary>
                    <Suspense>
                        {childeren}
                    </Suspense>
                </ErrorBoundary> */}
                <NavBar />
                {children}
            </body>
        </html>
    )
}
