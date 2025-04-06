import Title from './Title'


interface LayoutGamesProps {
    title: string,
    description: string,
    children: React.ReactNode
}

const LayoutGames: React.FC<LayoutGamesProps> = ({ title, description, children }) => {
    return (
        <div className='min-h-screen bg-[#1e1e1e] sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80 2xl:mx-112 flex flex-col items-center pb-48'>
            {/* Title Section */}
            <Title title={title} description={description} />

            <section className='w-full h-full'>
                {children}
            </section>
        </div>
    )
}





export default LayoutGames
