 const container = React.createElement(
    'div', {
        className: 'subheading', id: 'subtitle'}, 
        [
            React.createElement('section', { key: 1 }, [
                React.createElement(
                    'p', 
                    { key: 1 }, 
                    'The Library sucks.'
                ),
                React.createElement(
                    'img', 
                    { 
                        key: 2, 
                        style: { width: 300, height: 180 },
                        src:'./peakpx.jpg'
                    }, 
                ),
            ]),
            React.createElement('section', { key: 2 }, [
                React.createElement('form', { key: 1 }, [
                    React.createElement('div', {className: 'input-group', key: 1}, [
                        React.createElement('label', { key: 1 , htmlFor: 'username'}, 'Username'),
                        React.createElement('input', { key: 2 , id: 'username'})
                    ]),
                    React.createElement('div', {className: 'input-group', key: 2}, [
                        React.createElement('label', { key: 1 , htmlFor: 'password'}, 'Password'),
                        React.createElement('input', { key: 2 , id: 'password', type: 'password'})
                    ])
                ]),
            ]),
        ]
    )

 const root = ReactDOM.createRoot(document.querySelector('#root'))

 root.render(container)