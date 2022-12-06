import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
        {/* l'import avec balise IMG prend son path depuis le dossier public */}
            <img src="./logo192.png" alt="" />
            <h3> ❤️ flags</h3>
        </div>
    );
};

export default Logo;