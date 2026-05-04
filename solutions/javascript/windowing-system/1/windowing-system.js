// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
  constructor(width, height) {
    this.width = width ?? 80
    this.height = height ?? 60
  }

  resize(width, height) {
    this.width = width
    this.height = height
  }
}

export class Position {
  constructor(x, y) {
    this.x = x ?? 0
    this.y = y ?? 0
  }

  move(x, y) {
    this.x = x
    this.y = y
  }
}

export class ProgramWindow {
  constructor() {
    this._screenSize = new Size(800, 600)
    this._size = new Size()
    this._position = new Position()
  }

  get screenSize() {
    return this._screenSize
  }

  get size() {
    return this._size
  }

  get position() {
    return this._position
  }

  resize(newSize) {
    const width = Math.max(1, Math.min(newSize.width, this.screenSize.width - this.position.x))
    const height = Math.max(1, Math.min(newSize.height, this.screenSize.height - this.position.y))
    this._size.resize(width, height)
  }

  move(newPosition) {
    const x = Math.max(0, Math.min(newPosition.x, this.screenSize.width - this.size.width))
    const y = Math.max(0, Math.min(newPosition.y, this.screenSize.height - this.size.height))
    this._position.move(x, y)
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))
  return programWindow
}