import fs from 'fs';

const fourIndent = ' '.repeat(4);

const amount = 10000
let content = 'const num = 69420;\n\n'

for (let i = 0; i < amount; i++) {
    const statement = (i == 0) ? 'if' : 'else if'
    const numberOddOrEven = (i % 2 == 0) ? 'even' : 'odd'

    content += `${statement} (num == ${i}) {\n${fourIndent}console.log('${numberOddOrEven}')\n} `
}

content += `else {\n${fourIndent}console.log('Invalid Number')\n}`

fs.writeFileSync('problemSolved.js', content)