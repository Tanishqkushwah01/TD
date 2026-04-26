"use client"

import { useEffect, useState } from "react";
import RoomCard from "../Component/RoomCard";
import axios from "axios";
import { HTTP_URL } from "@repo/backend-common/config";


export default function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(`${HTTP_URL}/cards`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => setCards(res.data)).catch((e) => { console.log(e) })
    }, []);
    // console.log(cards.length);
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="grid grid-cols-3 gap-6 w-full max-w-6xl p-4" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem"
            }}>
                {cards.map((card: any) => (
                    <RoomCard key={card._id} date={card.createdAt} variant="#c8e8c8" slug={card.slug} />
                ))}
                {/* <RoomCard  key={card._id} date={Cards.createdAt} variant='#dca7a0' /> */}

                {cards.length}
                
                {/* <RoomCard date={Cards.createdAt} variant="#c8e8c8" />
                <RoomCard date={Cards.createdAt} variant="#c8dce8" />
                <RoomCard date={Cards.createdAt} variant="#c8dce8" />
                <RoomCard date={Cards.createdAt} variant='#dca7a0' />
                <RoomCard date={Cards.createdAt} variant="#c8e8c8" />
                <RoomCard date={Cards.createdAt} variant="#c8e8c8" />
                <RoomCard date={Cards.createdAt} variant="#c8dce8" />
                <RoomCard date={Cards.createdAt} variant='#dca7a0' />
                <RoomCard date={Cards.createdAt} variant='#dca7a0' />
                <RoomCard date={Cards.createdAt} variant='#dca7a0' /> */}
            </div>
        </div>
    );
}

