const mockStdin = require("mock-stdin")

const Main = require("./test")

const x = new Main()
it('aaaa', () => {
    const helper = (...args) => {
        const stdin = mockStdin.stdin()
        stdin.send("Hello world!")
        x.execute()
        // stdin.end()
      }

      helper()
})