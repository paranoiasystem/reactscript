import {Command, flags} from '@oclif/command'
import { Utils } from '../Utils/Utils'
import CompilerDirective from '../Utils/CompilerDirective'

export default class Component extends Command {
    static description = 'create an empty component'

    static examples = [
        `$ reactscript-cli component testComponent`,
    ]

    static flags = {
        help: flags.help({char: 'h'}),
        type: flags.string({
            char: 't',
            options: [
                'class',
                'c',
                'function',
                'f'
            ],
            required: true
        })
    }

    static args = [
        {
            name: 'componentName'
        }
    ]

    async run() {
        const {args, flags} = this.parse(Component)

        const componentName = args.componentName[0].toUpperCase() + args.componentName.substr(1)
        const componentType = flags.type

        const fileToCompile: CompilerDirective[] = [
            {
                sourceFile: '__test__/component_name.test.tsx.hbs',
                compiledFile: `__test__/${componentName}.test.tsx`,
                filePath: componentName,
                compilerData: { 'componentName' : componentName }
            },
            {
                sourceFile: 'component_name.tsx.hbs',
                compiledFile: `${componentName}.tsx`,
                filePath: componentName,
                compilerData: { 'componentName' : componentName }
            },
            {
                sourceFile: 'index.ts.hbs',
                compiledFile: 'index.ts',
                filePath: componentName,
                compilerData: { 'componentName' : componentName }
            }
        ]

        if (componentName) {
            // move to switch case
            if(componentType === 'class' || componentType === 'c'){
                // create folder
                Utils.CreateFolder(componentName)
                // copy template file
                Utils.CopyTemplate(componentName, '/component/simple_class')
                // move css file
                Utils.MoveFile(componentName, 'component_name.css', `${componentName}.css`)
                // compile template
                Utils.CompileTemplate(fileToCompile)
            } else if (componentType === 'function' || componentType === 'f') {
                console.log('Function coming soon!')
            }
        } else {
            await Component.run(['--help'])
        }        
    }

}