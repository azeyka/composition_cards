import React from 'react'
import Card from './Card';
import CardBody from './CardBody';
import CardImage from './CardImage';

export default function CardsCollection() {
    return (
        <div className='cards_collection'>
            <Card>
                <CardImage src="https://preview.ibb.co/gLbbM8/our-team-person.jpg" name="funny boy"/>
                <CardBody title="Some title">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="#" className="btn btn-primary">Go somewhere</button>
                </CardBody>
            </Card>

            <Card>
                <CardBody title="Another title">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="#" className="btn btn-primary">Go somewhere</button>
                </CardBody>
            </Card>
        </div>
    )
}
