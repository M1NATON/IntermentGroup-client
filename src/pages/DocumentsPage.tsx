import Header from "../components/Header.tsx";
import bgDocsImgR from '../assets/docs/bg_docs_right.png'
import bgDocsImgL from '../assets/docs/bg_docs_left.png'
import {arrDocs} from "../bd/docsFile.ts";
import DocsItem from "../ui/DocsItem.tsx";

const DocumentsPage = () => {
    return (
        <div>
            <Header/>
            <div className={`h-full w-full bg-[#f1f5f8] relative pb-[150px]`}>
                <img src={bgDocsImgR} alt="" className={'absolute right-0 top-60 w-[40%] z-5'}/>
                <img src={bgDocsImgL} alt="" className={'absolute left-0 top-0 h-[100%] object-cover z-5'}/>
                <div className="container text-[#1A2A42] px-20">
                    <h1 className={'text-textColor text-5xl font-bold pt-20 mb-10'}>Документы</h1>
                    <div className={'w-[60%] z-20 flex flex-wrap gap-6'}>
                        {arrDocs.map((item, idx) => (
                            <div>
                                <DocsItem title={item.title} description={item.description} file={item.file} key={idx}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentsPage;
