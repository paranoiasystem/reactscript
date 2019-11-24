import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import * as path from 'path'
import * as Handlebars from 'handlebars'
import * as Shell from 'shelljs'

interface compilerDirective {
    sourceFile: string
    compiledFile: string
    compilerOption: any
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
            name: 'project_name'
        }
    ]

    compileTemplate(data: compilerDirective) {
        const { sourceFile, compiledFile, compilerOption } = data
        const source = fs.readFileSync(Shell.pwd().toString() + `/${compilerOption.project_name}/${sourceFile}`, 'utf-8')
        const template = Handlebars.compile(source)
 
        const result = template(compilerOption)

        fs.writeFileSync(Shell.pwd().toString() + `/${compilerOption.project_name}/${compiledFile}`, result)
        Shell.rm(Shell.pwd().toString() + `/${compilerOption.project_name}/${sourceFile}`)
    }

    createFolder(project_name: string) {
        Shell.mkdir(project_name)
    }

    copyTemplate(project_name: string) {
        Shell.cp('-rf', path.join(__dirname, '../templates/create/*'), project_name)
        Shell.cp('-rf', path.join(__dirname, '../templates/create/.gitignore'), project_name)
        Shell.cp('-rf', path.join(__dirname, '../templates/create/.babelrc'), project_name)
    }

    installDependency(project_name: string) {
        Shell.cd(project_name)
        Shell.exec('npm i')
    }

    async run() {
        const {args} = this.parse(Create)

        const project_name = args.project_name

        const fileToCompile: compilerDirective[] = [
            {
                sourceFile: 'package.json.hbs',
                compiledFile: 'package.json',
                compilerOption: { 'project_name' : project_name }
            },
            {
                sourceFile: 'src/components/App/App.tsx.hbs',
                compiledFile: 'src/components/App/App.tsx',
                compilerOption: { 'project_name' : project_name }
            }
        ]

        if (project_name) {
            // create folder
            this.createFolder(project_name)
            // copy file
            this.copyTemplate(project_name)
            // compile template
            fileToCompile.map(data => this.compileTemplate(data))
            // install dependency
            this.installDependency(project_name)            
        } else {
            await Create.run(['--help'])
        }        
    }

}