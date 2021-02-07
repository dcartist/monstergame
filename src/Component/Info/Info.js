import React, { Component } from 'react';

class Rules extends Component {
    render() {
        return (
            <div className="Info">
                <h2>About Monster Arena</h2>
                <p>Based on the game rock paper scissors, Monster Arena is a react app built by Paula Bannerman developed over 7 days for the Vercel & Hashnode Hackathon. She also created the monsters and weapons art. To view the overview of the journey of creating this app, please visit this link:</p>
                <ul>
                    <li>Email: <a href="mailto:Pbannerman13@gmail.com" target="_blank">Pbannerman13@gmail.com</a></li>
                    <li>Github: <a href="https://github.com/dcartist" target="_blank">github.com/dcartist</a></li>
                    <li>Portfolio: <a href="https://dcartist.studio/" target="_blank">Dcartist.studio</a></li>
                </ul>
                <h2>Instructions</h2>
                <ol className="list-decimal">
                    <li>The user selects a monster.</li>
                    <li>The user selects a weapon for the user's monster.</li>
                    <li>The computer chooses the user's opponent. </li>
                    <li>Select the "fight" option.</li>
                    <li>View the results</li>
                </ol>
                <h3>The Conditions to win</h3>
                <ul>
                    <li>Scissors beats Paper</li>
                    <li>Rock beats Scissors</li>
                    <li>Paper beats Rock</li>
                </ul>

                <h3>The Weapons</h3>
                <div className="InfoWeapons">
                    <div>
                        <p>Scissors</p>
                <img src={process.env.PUBLIC_URL + `/weapons/3.png`} alt={`Scissors`} className="monsterWeaponImage" />
                    </div>
                    <div>
                        <p>Paper</p>
                <img src={process.env.PUBLIC_URL + `/weapons/2.png`} alt={`Scissors`} className="monsterWeaponImage" />
                    </div>
                    <div>
                        <p>Rock</p>
                <img src={process.env.PUBLIC_URL + `/weapons/1.png`} alt={`Scissors`} className="monsterWeaponImage" />
                    </div>
                </div>

                <h2>History of Rock Paper Scissors</h2>
                <div className="History">
                <p className="font-black">Insert from Wikipedia</p>
                <p>Rock paper scissors (also known by other orderings of the three items, with "rock" sometimes being called "stone" is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). "Scissors" is identical to the two-fingered V sign (also indicating "victory" or "peace") except that it is pointed horizontally instead of being held upright in the air.</p>

                <p>The players may count aloud to three or speak the name of the game (e.g., "Rock! Paper! Scissors!"), either raising one hand in a fist and swinging it down with each syllable or holding it behind their back. They then "throw" by extending it towards their opponent. Variations include a version where players throw immediately on the third count (thus throwing on the count of "Scissors!"), or a version where they shake their hands three times before "throwing."</p>

                <p>A simultaneous, zero-sum game, it has only two possible outcomes: a draw, or a win for one player and a loss for the other. A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors") but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper"). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie. </p>
                </div>
            </div>
        );
    }
}

export default Rules;