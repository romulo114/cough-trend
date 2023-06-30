import { CoughDynamicCard } from "components/CoughDynamicCard";
import { Button } from "components/lib/Button";
import { Modal } from "components/lib/Modal";
import { useCoughDynamic } from "hooks/useCoughDynamic";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  const { coughDynamic, isLoading, refresh } = useCoughDynamic();

  const handleClose = () => {
    setOpen((b) => !b);
  };

  useEffect(() => {
    if (!open) return;
    refresh();
  }, [open, refresh]);

  return (
    <>
      <Modal title="Insights" open={open} onClose={handleClose}>
        <Content>
          <CoughDynamicCard value={coughDynamic} isLoading={isLoading} />
          <RefreshButton onClick={refresh} disabled={isLoading}>
            {isLoading ? "Loading..." : "Refresh"}
          </RefreshButton>
        </Content>
      </Modal>
      {!open && (
        <Wrapper>
          <ShowInsightsButton onClick={() => setOpen(true)}>
            Show Insights
          </ShowInsightsButton>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RefreshButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
`;

const ShowInsightsButton = styled(Button)`
  margin: 20px auto;
`;

export default App;
