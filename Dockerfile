FROM ghcr.io/fredhutch/tfcb_2022:0.6.0

RUN apt update && apt install -y vim man less
