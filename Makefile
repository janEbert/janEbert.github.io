.PHONY: all clean

all:
	emacs -Q --script make.el

clean:
	rm -rf build/
