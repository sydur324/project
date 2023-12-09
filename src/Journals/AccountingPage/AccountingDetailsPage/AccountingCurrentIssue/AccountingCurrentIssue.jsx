

import issue from '../../../../../public/currentIssue.json'
import useArticle from '../../../../Hooks/useArticle';
const AccountingCurrentIssue = () => {
    const [articles] = useArticle()
    console.log(articles)
    

    
    return (
        <div className="w-full">
            <h2>hi</h2>
            {
                articles.map((journal,index) => <div key={index}>
                            <h2>hellow :{journal.author}</h2>
                </div>)
            }
        </div>
    );
};

export default AccountingCurrentIssue;