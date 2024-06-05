from interpreter import draw
from chessPictures import knight


knight_white = knight
knight_black = knight.negative()
knight_white_flipped = knight_white.verticalMirror()
knight_black_flipped = knight_black.verticalMirror()

top_row = knight_white.join(knight_black)
bottom_row = knight_black_flipped.join(knight_white_flipped)

four_knights = top_row.up(bottom_row)


draw(four_knights)
