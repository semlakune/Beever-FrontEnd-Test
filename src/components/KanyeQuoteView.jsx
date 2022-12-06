import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addQuoteToFavorite, fetchQuote} from "../store/actions/actionQuote";

export default function KanyeQuoteView() {
    const dispatch = useDispatch();
    const { quote, favorites } = useSelector((state) => state.quoteReducer);

    const addToFavorites = () => {
        const isDuplicate = favorites.some((favorite) => favorite === quote);
        if (!isDuplicate) {
            dispatch(addQuoteToFavorite(quote));
        }
    }

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);

    return (
        <section style={{textAlign: "center"}}>
            <img
                src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
                alt="W3Schools.com"
                style={{width: "300px"}}
            />
            <h1 style={{fontSize: "40px", marginTop: "10px"}}>Kanye-West Quote</h1>
            <h3>{quote}</h3>
            <button onClick={() => dispatch(fetchQuote())}>Get Quote</button>
            <button onClick={() => addToFavorites()}>Add Favorite</button>
            {favorites.map((favorite, index) => {
                return <p key={index}>{favorite}</p>;
            })}
        </section>
    );
}
