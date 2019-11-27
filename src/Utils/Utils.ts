import * as Shell from 'shelljs'
import * as fs from 'fs'
import * as path from 'path'
import CompilerDirective from './CompilerDirective'
import * as Handlebars from 'handlebars'


class Utils {
    static CreateFolder(folderName: string) {
        Shell.mkdir(folderName);
    }

    static CopyTemplate(folderName: string, templateName: string) {
        Shell.cp('-R', path.join(__dirname, `../templates/${templateName}/*`), folderName)
    }

    static MoveFile(folderName: string, source: string, destination: string) {
        const baseProjectPath = Shell.pwd().toString() + `/${folderName}`
        Shell.mv('-f', `${baseProjectPath}/${source}`, `${baseProjectPath}/${destination}`)
    }

    static ExecNpmCommand(folderName: string, command: string) {
        Shell.cd(folderName)
        Shell.exec(`npm ${command}`)
    }

    static CompileTemplate(compilerDirectives: CompilerDirective[]) {
        compilerDirectives.map(compilerDirective => {
            const { sourceFile, compiledFile, compilerData, filePath } = compilerDirective
            const source = fs.readFileSync(Shell.pwd().toString() + `/${filePath}/${sourceFile}`, 'utf-8')
            const template = Handlebars.compile(source)

            const result = template(compilerData)

            fs.writeFileSync(Shell.pwd().toString() + `/${filePath}/${compiledFile}`, result)
            Shell.rm(Shell.pwd().toString() + `/${filePath}/${sourceFile}`)            
        })
    }

}

export { Utils };