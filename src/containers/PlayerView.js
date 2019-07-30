import React from "react";
import PlayerCard from "../components/PlayerCard";
import { CHARACTERS_URL } from "../routes";

class PlayerView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //character: props.character,
            cards: []
        }
    }

    componentDidMount () {
        fetch(CHARACTERS_URL + `/${this.props.character.id}`)
            .then(response => response.json())
            .then(character => {
                this.setState({
                    cards: character.cards
                })
            })
            // .catch(error => {
            //     const cards= [
            //         {
            //             id: 0,
            //             title: "Bree",
            //             type: "Locale",
            //             content: "Bree was a village, of Men and hobbits, in Middle-earth, located east of the Shire and south of Fornost in Eriador. Bree was an ancient settlement of men in Eriador by the time of..",
            //             img_url: "https://vignette.wikia.nocookie.net/lotr/images/1/1a/Bree.jpg/revision/latest?cb=20060220135923"
            //         },
            //         {
            //             id: 1,
            //             title: "Strider",
            //             type: "NPC",
            //             content: "Aragorn joined Frodo Baggins, Bilbo's adopted heir, and three of his friends at the Inn of the Prancing Pony in Bree. Though originally the hobbits were suspicious of Strider, they eventually trusted him and prepared to escape Bree and the Ringwraiths.",
            //             img_url: "https://vignette.wikia.nocookie.net/lotr/images/5/5f/Strider_in_Prancing_Pony_-_FOTR.png/revision/latest?cb=20121003045004"
            //         },
            //         {
            //             id: 2,
            //             title: "Gandalf",
            //             type: "NPC",
            //             content: "Gandalf was shorter in stature than the other two; but his long white hair, his sweeping silver beard, and his broad shoulders, made him look like some wise king of ancient legend. In his aged face under great snowy brows his eyes were set like coals that could suddenly burst into fire.",
            //             img_url: "https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest?cb=20121110131754"
            //         }
            //     ]
            //     this.setState({
            //         cards: cards
            //     })
            // })
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui segment container centered">
                    <button className="ui fluid primary button">
                        Next Turn
                    </button>
                </div>
                <div className="ui segment items container centered">
                    {this.state.cards.map(card => <PlayerCard card={card} key={card.id}/>)}
                </div>
            </React.Fragment>
        )
    }
}

export default PlayerView