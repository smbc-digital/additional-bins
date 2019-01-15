import 'isomorphic-fetch'
import Timeout from 'await-timeout'

async function submitForm(context) {
    const convertedContext = {}
    const timeout = new Timeout()
    
    Object.keys(context).map(key => {
        if (context[key] !== undefined && context[key].value !== undefined) {
            convertedContext[key] = context[key].value
        }
    })

    var doneConvertedContext = JSON.stringify(convertedContext)
    try {
        const result = await Promise.race([
            await fetch('/additional-black-bin/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: doneConvertedContext
            }),
            timeout.set(10000, 'Timeout!')
        ])

        const paymentUrl = await result.text()
        return {
            status: result.status,
            url: paymentUrl
        }
    }
    catch (error) {
        return {
            status: 400
        }
    }
}

export default submitForm