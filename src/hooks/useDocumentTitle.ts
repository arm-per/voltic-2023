import {useEffect} from "react";

interface useDocumentTitleProps {
    sectionTitle: string;
    sectionId: string;
}
const useDocumentTitle = ({sectionTitle, sectionId}: useDocumentTitleProps): void => {

    useEffect(()=> {

        const element = document.getElementById(sectionId)

        window.addEventListener('scroll', ()=> {
            if(element?.getBoundingClientRect()?.top <= 50){
                document.title = `Voltic | ${sectionTitle}`
            }
        })

        return () => (
            window.removeEventListener('scroll', ()=> {
                if(element?.getBoundingClientRect()?.top <= 50){
                    document.title = `Voltic | ${sectionTitle}`
                }
            })
        )
    }, [sectionTitle, sectionId])
}
