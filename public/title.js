/**
 * * @file title.js creates an icon link for the title tag of our body, it does so by reducing the array given as IconLink to a 
 * * single value this link I got from google.
 * 
 * * In case you are wondering why this guy has created this file just for adding a icon on the document title then let me tell 
 * * you that I'm a little mad about proramming I don't want to see any kind of non-programming language on my github repository 
 * * adding this link to the markup was making it huge and github was not marking the HTML as others, so I decided to do this and 
 * * it worked see I'm not a layout designer or some kind of styler (I don't know if that word exists or not, but you get the 
 * * point), I'm a programmer, so I love writing huge files in programming language not in HTML or CSS.
 * 
 * ! If you still think that this guy is insane then, you know what, you are actually right!  
 */

window.addEventListener("load", () => {
    /**
     * @callback function() executes when the window is fully loaded, this function forms a link for the <link /> tag in our body
     * to give a icon to the <title></title> tag. 
     */

    /** 
     * @var {Array} IconLink holds the parts of the complete link as its elements.  
     */
    const IconLink = [
        "data:image/png;base64,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",
        "gg=="
    ];

    /** Get the <link /> tag from the document. */
    const DocLink = document.querySelector("#titleIcon");

    const formLink = () => {
        /**
         * @function formLink() reduces the array (IconLink) to a single value to form a valid icon link for the title bar of our
         * app.
         * 
         * @returns valid icon link. 
         */
        let iconLink = "";

        Array.from(IconLink).forEach((element, index, array) => {
            /**
             * @function forEach() adds each element of the array (IconLink) to the local variable iconLink.
             * 
             * ! This is how I reduce.
             */
            iconLink += element;
        });

        return iconLink;
    };

    /** Set the <link href="" /> to the formed link. */
    DocLink.setAttribute("href", formLink());
});