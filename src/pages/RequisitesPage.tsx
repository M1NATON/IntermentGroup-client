import Header from "../components/Header.tsx";


const RequisitesPage = () => {
    return (
        <div className={'bg-[#f1f5f8]'}>
            <Header/>
            <div className={'text-[#1A2A42] py-14'}>
                <div className={'container'}>

                    <h1 className={'text-textColor text-5xl font-bold mb-10'}>Справочники и госты</h1>

                    <div>
                        <p className={'font-[600] mb-3'}>Полное наименование организации:<span
                            className={'font-normal'}> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ИНТЕРМЕТГРУПП"</span>
                        </p>
                        <p className={'font-[600] mb-3'}>Сокращенное наименование организации:<span
                            className={'font-normal'}> ООО "ИНТЕРМЕТГРУПП"</span></p>
                        <p className={'font-[600] mb-3'}>ИНН:<span
                            className={'font-normal'}> 7730565447</span></p>

                        <p className={'font-[600] mb-3'}>КПП:<span
                            className={'font-normal'}> 770301001</span></p>

                        <p className={'font-[600] mb-3'}>ОГРН:<span
                            className={'font-normal'}> 1077758343134</span></p>

                        <p className={'font-[600] mb-3'}>Дата государственной регистрации:<span
                            className={'font-normal'}> 26.07.2007</span></p>

                        <p className={'font-[600] mb-3'}>Ген. директор:<span
                            className={'font-normal'}> УКОЛОВ ДМИТРИЙ ЯКОВЛЕВИЧ</span></p>

                        <p className={'font-[600] mb-3'}>Адрес:<span
                            className={'font-normal'}> МОСКВА, ПРЕСНЕНСКАЯ НАБЕРЕЖНАЯ, ДОМ 8, СТРОЕНИЕ 1, ПОМЕЩЕНИЕ IN КОМ.7 ЭТАЖ 11</span>
                        </p>
                    </div>

                    <h1 className={'text-textColor text-5xl font-bold pt-20 mb-10'}>Справочники и госты</h1>
                    <div>
                        <p className={'font-[600] mb-3'}>Название:<span
                            className={'font-normal'}> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ИНТЕРМЕТГРУПП"</span>
                        </p>
                        <p className={'font-[600] mb-3'}>Наименование банка:<span
                            className={'font-normal'}> Филиал "Газпромбанк" (Акционерное общество) "Центральный"</span>
                        </p>
                        <p className={'font-[600] mb-3'}>БИК:<span
                            className={'font-normal'}> 044661837</span></p>

                        <p className={'font-[600] mb-3'}>Расчетный счёт:<span
                            className={'font-normal'}> 40702810600000000835</span></p>

                        <p className={'font-[600] mb-3'}>Кор. счёт:<span
                            className={'font-normal'}> 30101810100000000837</span></p>

                        <p className={'font-[600] mb-3'}>Валюта счёта:<span
                            className={'font-normal'}> руб</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequisitesPage;