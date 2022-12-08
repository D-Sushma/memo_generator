export default function Meme(){
    return(
        <main>
            <form className="form">
                <div className="input">
                    <input 
                        className="form-input"
                        type="text" 
                        placeholder="shut up" 
                    />
                    <input 
                        className="form-input"
                        type="text" 
                        placeholder="and take my money"
                    />
                </div>
                <button className="form-button">
                    Get a new meme image 🖼
                </button> 
            </form>
        </main>
    )
}