import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPersonalQuote} from "../store/actions/actionQuote";

export default function PersonalQuoteView() {
    const dispatch = useDispatch();
    const {quotes} = useSelector((state) => state.quoteReducer);
    const [quote, setQuote] = useState("");
    const addQuote = (e) => {
        e.preventDefault()
        const isDuplicate = quotes.some((quoteItem) => quoteItem === quote);
        if (!isDuplicate) {
            dispatch(addPersonalQuote(quote));
        }
    }
    return (
        <section style={{textAlign: "center", marginTop: "60px"}}>
            <hr style={{maxWidth: "30%"}}/>
            <h2>My Quotes</h2>
            <form onSubmit={addQuote}>
                <input type={"text"} value={quote} onChange={(e) => setQuote(e.target.value)}/>
                <button
                    type={`submit`}
                >
                    Submit
                </button>
            </form>
            {quotes.map((quote, index) => {
                return <p key={index}>{quote}</p>;
            })
            }
        </section>
    );
}
