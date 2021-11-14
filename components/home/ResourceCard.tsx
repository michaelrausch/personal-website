import { motion } from 'framer-motion';
import React from 'react';

const ResourceCard: React.FC<Props> = ({ resource }) => {
    return (
        <motion.a
            href={resource.url}
            whileHover={{ scale: 1.05 }}
            className="w-48 rounded-md m-5 sm:m-0 sm:mr-5 mb-5 bg-cover"
            target="_blank"
            rel="noreferrer">
            <div className="rounded-md text-center sm:text-left">
                <div style={{ backgroundImage: 'url(' + resource.background + ')' }} className="h-32 rounded-md bg-cover" />
                <small className="t text-base font-futura-pt">{resource.type}</small>
                <h4 className="relative font-futura-pt-bold text-xl">{resource.name}</h4>
            </div>
        </motion.a>
    )
}

interface Props {
    resource: Resource
}

interface Resource {
    url: string;
    background: string;
    type: string;
    name: string;
}

export default ResourceCard;