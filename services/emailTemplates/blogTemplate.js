module.exports = (blog) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>${blog.title}</h3>
                    <p>${blog.body}</p>
                </div>
            </body>
        </html>

    `;
};