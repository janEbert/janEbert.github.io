.PHONY: all install-org clean

all:
	emacs -Q --script make.el

install-org:
	emacs -Q --script install-org.el

clean:
	rm -rf build/
