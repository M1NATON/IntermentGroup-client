import arrow from '../assets/docs/download_icon.svg'

interface DocsItemProps{
    title: string
    description: string
    file: string
}

const DocsItem = ({title, description, file}:DocsItemProps) => {
    return (
        <div className={'bg-white rounded-2xl rad p-4 mb-10'}>
            <div className={'flex justify-between mb-3 items-center'}>
                <h1 className={'font-normal text-xl '}>{title}</h1>
                <a href={`/pdf/${file}`} type="application/pdf" download
                   className={'flex text-[#1488CA] text-xl items-center gap-2'}>.pdf <img
                    src={arrow} alt="" className={'w-[20px]'}/></a>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default DocsItem;