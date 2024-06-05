from interpreter import draw
from chessPictures import square

white_square = square
black_square = square.negative()

row = white_square.join(black_square).horizontalRepeat(4)

draw(row)
