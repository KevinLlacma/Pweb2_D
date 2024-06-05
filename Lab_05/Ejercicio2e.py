from interpreter import draw
from chessPictures import square

black_square = square.negative()
white_square = square

row = black_square.join(white_square).horizontalRepeat(4)

draw(row)
