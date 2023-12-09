import { useQuery } from "@tanstack/react-query";


const useArticle = () => {
    const {data: articles=[],refetch} =useQuery({
        queryKey:['articles'],
        queryFn:async() =>{
            const res = await fetch('currentIssue.json')
            return res.json()
        }
    })
    return [articles,refetch]
};
export default useArticle;