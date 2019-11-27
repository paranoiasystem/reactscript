import {Command, flags} from '@oclif/command'
import CompilerDirective from '../Utils/CompilerDirective'
import { Utils } from '../Utils/Utils'

interface HiddenFile {
    source: string
    destination: string
}

export default class Create extends Command {
    static description = 'create an empty starter project'

    static examples = [
        `$ reactscript-cli create new-app`,
    ]

    static flags = {
        help: flags.help({char: 'h'}),
    }

    static args = [
        {
            name: 'projectName'
        }
    ]

    async run() {
        const {args} = this.parse(Create)

        const projectName = args.projectName

        const fileToCompile: CompilerDirective[] = [
            {
                sourceFile: 'package.json.hbs',
                compiledFile: 'package.json',
                filePath: projectName,
                compilerData: { 'projectName' : projectName }
            },
            {
                sourceFile: 'src/index.html.hbs',
                compiledFile: 'src/index.html',
                filePath: projectName,
                compilerData: { 'projectName' : projectName }
            },
            {
                sourceFile: 'src/components/App/App.tsx.hbs',
                compiledFile: 'src/components/App/App.tsx',
                filePath: projectName,
                compilerData: { 'projectName' : projectName }
            }
        ]

        const hiddenFiles: HiddenFile[] = [
            {
                source: 'gitignore',
                destination:'.gitignore'
            },
            {
                source: 'babelrc',
                destination:'.babelrc'
            }
        ]

        if (projectName) {
            // create folder
            Utils.CreateFolder(projectName)
            // copy file
            Utils.CopyTemplate(projectName, 'create')
            // move hidden file
            hiddenFiles.map(hiddenFile => Utils.MoveFile(projectName, hiddenFile.source, hiddenFile.destination))
            // compile template
            Utils.CompileTemplate(fileToCompile)
            // install dependency
            Utils.ExecNpmCommand(projectName, 'install')            
        } else {
            await Create.run(['--help'])
        }        
    }

}