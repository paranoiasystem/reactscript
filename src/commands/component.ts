import {Command, flags} from '@oclif/command'

export default class Component extends Command {
    static description = 'create an empty component'

    static examples = [
        `$ reactscript-cli component testComponent`,
    ]

    static flags = {
        help: flags.help({char: 'h'}),
        type: flags.string({char: 't'})
    }

    static args = [
        {
            name: 'componentName'
        }
    ]

    async run() {
        const {args} = this.parse(Component)

        const componentName = args.componentName

        if (componentName) {
            console.log(`${componentName} Coming Soon`)
        } else {
            await Component.run(['--help'])
        }        
    }

}