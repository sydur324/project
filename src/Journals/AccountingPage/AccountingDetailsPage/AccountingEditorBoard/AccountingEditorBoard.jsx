
import boards from '../../../../../public/accountingEditorBoard.json'
const AccountingEditorBoard = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Editorial Boad</h2>

            <div className="my-8 space-y-3">
                {
                    boards.map((board, index) => <div key={index}>
                        <h2 className="flex  items-center space-x-2 font-medium">{board.name}</h2>
                        <p className="text-[#262525dd]">{board.title}</p>
                    </div>)
                }
            </div>
            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>

            </div>
        </div>
    );
};

export default AccountingEditorBoard;